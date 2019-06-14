import { Container } from 'unstated';
import docsData from './mock/data';

const getRandomDocId = () => parseInt((Math.random() + 10) * 100);

const extractFileInfo = (eventObj) => {
  const file = eventObj.target.files[0];
  if (!file) return;
  const path = URL.createObjectURL(file);;
  const { name, type } = file;
  return {
    fileName: name,
    fileType: type,
    filePath: path,
  };
}


export default class AppState extends Container {
  state = {
    docList: docsData,
    selectedDoc: docsData[1],
  }

  selectDoc(id) {
    const doc = this.state.docList.filter(doc => doc.id === id)[0];
    this.setState({
      selectedDoc: doc,
    });
  }

  fakeUploadDocument(eventObj) {
    const doc = extractFileInfo(eventObj);
    this.setState({
      docList: [...this.state.docList, {
        id: `doc_${getRandomDocId()}`,
        fileName: doc.fileName,
        filePath: doc.filePath,
        fileType: doc.fileType.replace("application/", ""),
        author: "me",
        sharedWith: "Dustin",
      }]
    })
  }
}

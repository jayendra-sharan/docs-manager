import { Container } from 'unstated';
import docsData from './mock/data';

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
}

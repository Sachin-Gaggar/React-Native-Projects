import {action, observable, computed, makeObservable} from 'mobx';
class NoteListStore {
  constructor() {
    makeObservable(this);
  }
  @observable data = [];
  @observable id = -1;
  @observable active = false;
  @observable modalVisible = false;
  @action modalVisibility(visible) {
    this.modalVisible = visible;
    this.active = false;
  }
  @action newButton() {
    this.modalVisibility(true);

    let id = this.id;
    if (id < 0 || Boolean(this.data[id].title)) {
      id = ++this.id;
      this.data.push({id, title: '', notes: ''});
    } else {
      this.data.push({id, title: '', note: ''});
    }
  }
  @action addTitle(title) {
    this.active = Boolean(title);
    let id = this.id;
    this.data[id].title = title;
  }
  @action addNote(note) {
    let id = this.id;
    this.data[id].note = note;
  }

  @observable editId = 0;

  @observable editModalVisible = false;
  @action editModalVisibility(visible) {
    this.editModalVisible = visible;
  }
  @action editButton(id) {
    this.editModalVisibility(true);
    this.editId = id;
  }
  @action editTitle(title) {
    let id = this.editId;
    this.data[id].title = title;
  }
  @action editNote(note) {
    let id = this.editId;
    this.data[id].note = note;
  }

  @action deleteNote(id) {
    let newData = this.data.filter((item) => {
      return item.id != id;
    });
    let newId = 0;
    this.data = newData.map((item) => {
      return {...item, id: newId++};
    });
    this.id--;
  }
}
export default new NoteListStore();

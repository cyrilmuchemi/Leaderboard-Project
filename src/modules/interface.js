import refresh from './refresher.js';
import { name, score } from './definition.js';
import User from './UI.js';
import Api from './api.js';

const Submit = (e) => {
  e.preventDefault();
  const Data = new Api();
  Data.add(User());
  refresh(name, score);
};

export default Submit;
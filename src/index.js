import './style.css';
import Submit from './modules/interface.js';
import { scoreForm, refresh } from './modules/definition.js';
import Score from './modules/await.js';

refresh.addEventListener('click', Score);
scoreForm.addEventListener('submit', Submit);

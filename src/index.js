import './style.css';
import Submit from './modules/interface';
import { scoreForm, refresh } from './modules/definition';
import Score from './modules/await';


refresh.addEventListener('click', Score);
scoreForm.addEventListener('submit', Submit);

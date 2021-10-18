import './App.css';
import { PersonInfo } from './PersonInfo';
import { MyPet } from './MyPet';
import {Biography} from './Biography'

function App() {
  let Andrey = {Name:"Andrey",Surname:"Grigorev",Patronymic:"Viktorovitch",Age:19,Phone:"0684267002",Email:"andrey@gmail.com"}
  let MyCat = {Type:"Кот",Name:"Кеша",Age:3}
  let biograph = {Name:"Уи́льям Шекспи́р",datebirth:"26:04:1564",datedeath:"03:05:1616"}
  let Tragedies=[{Title:"Га́млет",Description:"трагедия Уильяма Шекспира в пяти актах, одна из самых известных его пьес и одна из самых знаменитых пьес в мировой драматургии"},
  {Title:"Макбе́т",Description:"отдалённо основанная на истории реального шотландского короля Макбета, часто представляется архетипичной историей об опасности чрезмерной жажды власти и измены друзьям"}]
  return (
    <div className="App">
      <PersonInfo user={Andrey}/>
      <MyPet pet={MyCat}/>
      <Biography biography = {biograph} tragedies = {Tragedies}/>
    </div>
  );
}

export default App;

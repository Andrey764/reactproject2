import { Tragedy } from "./Tragedy";

export function Biography(props){
    return(
        <>
        <h2>{props.biography.Name}</h2>
        <div>{props.biography.datebirth} - {props.biography.datedeath}</div>
        <ul>
            {/* <li><Tragedy Title={props.Biography.Tragedies[0].Title} Description={props.Biography.Tragedies[0].Description}/></li>
            <li><Tragedy  Title={props.Biography.Tragedies[1].Title} Description={props.Biography.Tragedies[1].Description}/></li> */}
            {props.tragedies.map((item)=>
            <li>
                <Tragedy Title={item.Title} Description={item.Description}/>
            </li>
            )}
        </ul>
        </>
    );
}
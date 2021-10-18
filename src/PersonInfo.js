export function PersonInfo(props){
    return(
        <>
            <h2>{props.user.Name} {props.user.Surname} {props.user.Patronymic}</h2>
            <div>Возрост: {props.user.Age} лет</div>
            <div>Телефон: {props.user.Phone}</div>
            <div>E-mail: {props.user.Email}</div>
        </>
    );
}
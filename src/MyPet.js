export function MyPet(props){
    return(
        <>
        <table>
            <tr>
                <td>вид домашнего питомца: </td>
                <td>{props.pet.Type}</td>
            </tr>
            <tr>
                <td>Имя питомца: </td>
                <td>{props.pet.Name}</td>
            </tr>
            <tr>
                <td>Возрост питомца: </td>
                <td>{props.pet.Age} года</td>
            </tr>
        </table>
        </>
    );
}
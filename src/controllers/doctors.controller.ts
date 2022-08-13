
export class DoctorsController {
    getDoctors = () => {
        console.log('llegue al controller')
        return ([{
            id: 1,
            age: 30,
            img: 'https://i.pravatar.cc/300',
            name: 'Fabian',
            specialty: 'General'
          },
          {
            id: 2,
            age: 30,
            img: 'https://i.pravatar.cc/300',
            name: 'Marta',
            specialty: 'Psiquiatra'
          }])
    }
}

export default new DoctorsController()
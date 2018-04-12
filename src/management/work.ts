export class Work {
    constructor(public task: TypeTask, 
                public status: StatusWork = StatusWork.OutWork) {

    }




}

class {

    
}

enum StatusWork {    
    InWork, // En trabajo
    OutWork, // Sin trabajo
    Error, // Eror Producido
    OnHold // En Espera
}

enum TypeTask {
    Service,
    Creep
}

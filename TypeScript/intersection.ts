type draggable =  {
    drag : () => void
};
type resizable = {
    resize : () => void
}

type UiEvent = draggable & resizable 
let textbox : UiEvent {
    
}

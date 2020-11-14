import axios from 'axios';

const api = axios.create({
   baseURL:'http:localhost:3333',
});

export default api;

// ios com emulador : localhost
// ios com fisico: Ip da maquina 
// Android com emulador : localhost (adb reverse tcp:3333 tcp:3333)
// Android com emulador: 10.0.2.2 (android studio)
// Android com fisico : Ip da maquina
// Android com emulador (genymochion) : 10.0.3.2
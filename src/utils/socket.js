import io from 'socket.io-client';
import authorization from './authorization';


const token = authorization();

const socket = io(`wss://wsapi.bmakers.site/socket.io/?token=${token}`);
export default socket
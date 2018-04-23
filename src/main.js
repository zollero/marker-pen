
import foo from './foo';
import { version } from '../package.json';

export default function () {
    console.log(foo, version);
}

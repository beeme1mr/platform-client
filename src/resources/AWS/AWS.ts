import Resource from '../Resource';
import {AWSAgentInstanceModel} from './AWSInterfaces';

export default class AWS extends Resource {
    static baseUrl = `/rest/aws/instances/agents`;

    list() {
        return this.api.get<AWSAgentInstanceModel[]>(AWS.baseUrl);
    }
}
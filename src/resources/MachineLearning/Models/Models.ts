import API from '../../../APICore';
import Resource from '../../Resource';
import {MLModelInfo} from '../ModelInformation/ModelInformationInterfaces';
import {MLModel} from './ModelsInterfaces';

export default class Models extends Resource {
    static baseUrl = `/rest/organizations/${API.orgPlaceholder}/machinelearning/models`;

    list() {
        return this.api.get<MLModel[]>(Models.baseUrl);
    }

    listDetails() {
        return this.api.get<MLModel[]>(`${Models.baseUrl}/details`);
    }

    getDetails(modelId: string) {
        return this.api.get<MLModelInfo>(`${Models.baseUrl}/${modelId}/details`);
    }

    get(modelId: string) {
        // I just added this one
        return this.api.get<MLModelInfo>(`${Models.baseUrl}/${modelId}`);
    }

    delete(modelId: string) {
        return this.api.delete(`${Models.baseUrl}/${modelId}`);
    }
}

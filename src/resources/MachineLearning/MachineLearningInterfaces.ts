import {GranularResource} from '../BaseInterfaces';
import {IntervalUnit} from '../Enums';
import {MLModel} from './Models/ModelsInterfaces';

export interface RegistrationModel extends GranularResource {
    engineId: string;
    modelName: string;
    modelDisplayName?: string;
    exportPeriod: string;
    intervalTime: number;
    intervalUnit: IntervalUnit;
    exportOffset?: string;
    commandLineParameters?: string[];
    commonFilter?: string;
    customEventFilter?: string;
    searchEventFilter?: string;
    viewEventFilter?: string;
    versionMatcher?: string;
}

export interface MLModelCreated extends MLModel {
    endTime?: number;
    startTime?: number;
    resourceId?: string;
}

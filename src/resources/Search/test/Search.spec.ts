import API from '../../../APICore';
import {RestUserIdType} from '../../Enums';
import Search from '../Search';

jest.mock('../../../APICore');

const APIMock: jest.Mock<API> = API as any;

describe('Search', () => {
    let search: Search;
    const api = new APIMock() as jest.Mocked<API>;
    const serverlessApi = new APIMock() as jest.Mocked<API>;

    beforeEach(() => {
        jest.clearAllMocks();
        search = new Search(api, serverlessApi);
    });

    describe('createToken', () => {
        const tokenParams = {
            userIds: [
                {
                    name: 'asmith@example.com',
                    type: RestUserIdType.User,
                    provider: 'Email Security Provider',
                    infos: {},
                    authCookie: '',
                    password: 'string',
                },
            ],
            userDisplayName: 'Alice Smith',
            userGroups: ['Tech support agents', 'Employees'],
            canSeeUserProfileOf: ['bjones@acme.com', 'dmoore@acme.com'],
            pipeline: 'InternalSearch',
            filter: '@source==KnowledgeBase',
            searchHub: 'SupportHub',
            salesforceOrganizationId: '00Df23090018W5bEAG',
            validFor: 3600000,
            salesforceUser: 'string',
            salesforceCommunityUrl: 'string',
            salesforceFallbackToAdmin: true,
            usertype: 'string',
            licenseDefinitionKey: 'string',
            superUserToken: 'string',
            commerce: {
                catalogId: 'string',
                filter: 'string',
                operation: 'string',
            },
            scope: 0,
        };

        it('should make a post call to the searchAPI correct url with its params to create a token', () => {
            search.createToken(tokenParams);
            expect(api.post).toHaveBeenCalledTimes(1);
            expect(api.post).toHaveBeenCalledWith(
                `${Search.baseUrl}/token?organizationId=${API.orgPlaceholder}`,
                tokenParams
            );
        });
    });

    describe('Make a query on the search', () => {
        it('should make a post call to query the search for result', () => {
            const queryParams = {q: ''};
            search.query(queryParams);
            expect(api.post).toHaveBeenCalledTimes(1);
            expect(api.post).toHaveBeenCalledWith(Search.baseUrl, queryParams);
        });
    });
});

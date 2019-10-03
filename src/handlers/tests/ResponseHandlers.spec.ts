import handleResponse from '../ResponseHandlers';

describe('ResponseHandlers', () => {
    it('should return a promise resolved with an empty object when the response status code is 204', async () => {
        const noContentResponse = new Response(null, {status: 204});
        const ret = await handleResponse(noContentResponse);
        expect(ret).toEqual({});
    });

    it('should return a promise resolved with the response body when the response status is between 200 and 299', async () => {
        const data = {someData: 'thank you!'};

        const okResponse = new Response(JSON.stringify(data), {status: 200});
        const ret1 = await handleResponse(okResponse);
        expect(ret1).toEqual(data);

        const stilOkResponse = new Response(JSON.stringify(data), {status: 299});
        const ret2 = await handleResponse(stilOkResponse);
        expect(ret2).toEqual(data);
    });

    it('should return a promise rejected with the response body when the status is not between 200 and 299 ', async () => {
        const error = {code: 'WRONG_UTENSIL', message: 'Use a spoon to eat the soup.'};
        const errorResponse = new Response(JSON.stringify(error), {status: 400});

        try {
            await handleResponse(errorResponse);
        } catch (err) {
            expect(err).toEqual(error);
        }

        expect.assertions(1);
    });
});
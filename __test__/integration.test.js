// __tests__/integration.test.js

const { PokeApi } = require('../src/PokeApi');
const { Query } = require('../src/Query');
const { HttpClient } = require('../src/HttpClient');
// const { PokeApi } = require('../src/PokeApi.php');  
// const { PokeApi } = require('../src/PokeApi');  



describe('PokeApi Integration Tests', () => {
  let pokeApi;

  beforeEach(() => {
    const query = new Query();
    pokeApi = new PokeApi(query);
  });

  test('should filter and limit results', async () => {
    pokeApi.search('type', 'fire').limit(10);
    const result = await pokeApi.request();

    expect(result).toBeDefined();
    expect(result).toHaveLength(10);
  });

  test('should handle API exceptions', async () => {
    pokeApi.search('invalidFilter', 'value');

    await expect(pokeApi.request()).rejects.toThrow('ApiException');
  });
});
const { parse: urlParse } = require('url');

const axios = jest.genMockFromModule('axios');

const mockResponse = Object.create(null);

function setMockPayments(payments) {
  if (mockResponse['/payments']) {
    mockResponse['/payments'] = mockResponse['/payments'].concat(payments);
    return;
  }
  mockResponse['/payments'] = payments;
}

function setMockTransactions(transactions) {
  mockResponse['/transactions'] = transactions;
}

function setMockClient(client) {
  mockResponse[`/clients/${client.id}`] = client;
}

function get(url) {
  const urlParsed = urlParse(url);
  const pathSplited = urlParsed.pathname.split('/');
  let path = '';
  if (
    pathSplited[pathSplited.length - 1] === 'transactions' ||
    pathSplited[pathSplited.length - 1] === 'payments'
  ) {
    path = `/${pathSplited[pathSplited.length - 1]}`;
  } else {
    path = urlParsed.pathname;
  }
  return Promise.resolve({ data: mockResponse[path] });
}

axios.setMockPayments = setMockPayments;
axios.setMockTransactions = setMockTransactions;
axios.setMockClient = setMockClient;
axios.get = get;

module.exports = axios;

// This is an example, the config should be modified for the application

export const API_MOCK_CONFIG = [
  {
    endpoint: 'wmr/v2/Rider/GetEligableRiders',
    apiMockUrl: 'https://9926901b-42b6-41ce-9741-40d00a00b871.mock.pstmn.io',
    headers: {
      'x-mock-response-name': 'GET-200'
    }
  },
  {
    endpoint: 'wmr/v2/customer/Trips',
    apiMockUrl: 'https://bb26901b-42c6-41se-30393-40d00a00b132.mock.pstmn.io',
    headers: {
      'x-mock-response-name': 'GET-200'
    }
  },
  {
    endpoint: 'wmr/v2/customer/Trips/cancel',
    apiMockUrl: 'https://bb26901b-42c6-41se-30393-40d00a00b132.mock.pstmn.io',
    headers: {
      'x-mock-response-name': 'POST-400'
    }
  }
];

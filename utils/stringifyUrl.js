import queryString from 'query-string';

export const stringifyData = (data) =>
  queryString.stringify(data, {
    parseBooleans: true,
    skipEmptyString: true,
    skipNull: true,
  });

export const parseStringifiedData = (stringifiedData) => queryString.parse(stringifiedData);

import qs from 'query-string';

export function getParamsfromQueryString(queryStr) {
  return qs.parse(queryStr);
}

export function createCalculationFormFromParams(params) {
  return {
    talentType: params.talent,
    employeeNumber: +(params.peopleRequired || 0),
    industry: params.industry,
    companySize: params.companySize,
    costOfLiving: params.livingCost,
    firstName: params.firstName,
    lastName: params.lastName,
    company: params.company,
    email: params.email,
  };
}

export function createShareUrl(form) {
  const url = window.location.href;
  const queryStr = qs.stringify({
    talent: form.talentType,
    peopleRequired: form.employeeNumber || undefined,
    industry: form.industry,
    companySize: form.costOfLiving,
    livingCost: form.firstName,
    firstName: form.talentType,
    lastName: form.lastName,
    company: form.company,
    email: form.email,
  });

  return url + (queryStr ? `?${queryStr}` : '');
}

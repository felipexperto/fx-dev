let DOMAIN = '';
let SITE_URL = '';

if (process.env.NODE_ENV === 'development') {
  DOMAIN = 'localhost';
  SITE_URL = process.env.SITE_URL || 'http://localhost:8000';
} else {
  DOMAIN = 'sitesemcomplicacao.com.br';
  SITE_URL = 'https://sitesemcomplicacao.com.br';
}

module.exports = {
  DOMAIN,
  SITE_URL,
};

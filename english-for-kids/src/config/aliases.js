const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components`,
    '@UI': `${prefix}/components/UI`,
    '@assets': `${prefix}/assets/`,
    '@store': `${prefix}/store/`,
});

module.exports = aliases;
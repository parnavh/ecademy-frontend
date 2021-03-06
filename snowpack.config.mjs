/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
		src: '/',
		public: {
			url: '/',
			static: true
		}
	},
	plugins: [
		'@snowpack/plugin-sass',
		'@snowpack/plugin-dotenv'
	],
	buildOptions: { clean: true },
};

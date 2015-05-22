require.config({
	baseUrl: '../../dist/packed',
	paths: {
		'jquery': '../../node_modules/jquery/dist/jquery',
		'jquery-ui': '../../node_modules/jquery-ui/jquery-ui'
	}
});

require(['main']);

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackConcatPlugin = require('webpack-concat-files-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RtlCssPlugin = require('rtlcss-webpack-plugin');

const rootPath = path.resolve(__dirname, '');
const publicPath = path.resolve(__dirname, 'public');

module.exports = [
    {
        mode: 'none',
        devtool: 'source-map',
        entry: {
            'chart': rootPath + '/js/src/chart.js',
            'codemirror/addon/lint/sql-lint': rootPath + '/js/src/codemirror/addon/lint/sql-lint.js',
            'console': { import: rootPath + '/js/src/console.js', library: { name: 'Console', type: 'window', export: 'Console' } },
            'datetimepicker': rootPath + '/js/src/datetimepicker.js',
            'database/central_columns': rootPath + '/js/src/database/central_columns.js',
            'database/events': rootPath + '/js/src/database/events.js',
            'database/multi_table_query': rootPath + '/js/src/database/multi_table_query.js',
            'database/operations': rootPath + '/js/src/database/operations.js',
            'database/qbe': rootPath + '/js/src/database/qbe.js',
            'database/query_generator': rootPath + '/js/src/database/query_generator.js',
            'database/routines': rootPath + '/js/src/database/routines.js',
            'database/search': rootPath + '/js/src/database/search.js',
            'database/structure': rootPath + '/js/src/database/structure.js',
            'database/tracking': rootPath + '/js/src/database/tracking.js',
            'database/triggers': rootPath + '/js/src/database/triggers.js',
            'designer/init': rootPath + '/js/src/designer/init.js',
            'drag_drop_import': rootPath + '/js/src/drag_drop_import.js',
            'error_report': rootPath + '/js/src/error_report.js',
            'export': rootPath + '/js/src/export.js',
            'export_output': rootPath + '/js/src/export_output.js',
            'gis_data_editor': rootPath + '/js/src/gis_data_editor.js',
            'home': rootPath + '/js/src/home.js',
            'import': rootPath + '/js/src/import.js',
            'jqplot/plugins/jqplot.byteFormatter': rootPath + '/js/src/jqplot/plugins/jqplot.byteFormatter.js',
            'jquery.sortable-table': rootPath + '/js/src/jquery.sortable-table.js',
            'main': rootPath + '/js/src/main.js',
            'makegrid': rootPath + '/js/src/makegrid.js',
            'menu_resizer': rootPath + '/js/src/menu_resizer.js',
            'multi_column_sort': rootPath + '/js/src/multi_column_sort.js',
            'name-conflict-fixes': rootPath + '/js/src/name-conflict-fixes.js',
            'normalization': rootPath + '/js/src/normalization.js',
            'replication': rootPath + '/js/src/replication.js',
            'server/databases': rootPath + '/js/src/server/databases.js',
            'server/plugins': rootPath + '/js/src/server/plugins.js',
            'server/privileges': rootPath + '/js/src/server/privileges.js',
            'server/status/monitor': rootPath + '/js/src/server/status/monitor.js',
            'server/status/processes': rootPath + '/js/src/server/status/processes.js',
            'server/status/queries': rootPath + '/js/src/server/status/queries.js',
            'server/status/sorter': rootPath + '/js/src/server/status/sorter.js',
            'server/status/variables': rootPath + '/js/src/server/status/variables.js',
            'server/user_groups': rootPath + '/js/src/server/user_groups.js',
            'server/variables': rootPath + '/js/src/server/variables.js',
            'setup/scripts': rootPath + '/js/src/setup/scripts.js',
            'shortcuts_handler': rootPath + '/js/src/shortcuts_handler.js',
            'sql': rootPath + '/js/src/sql.js',
            'table/change': rootPath + '/js/src/table/change.js',
            'table/chart': rootPath + '/js/src/table/chart.js',
            'table/find_replace': rootPath + '/js/src/table/find_replace.js',
            'table/gis_visualization': rootPath + '/js/src/table/gis_visualization.js',
            'table/operations': rootPath + '/js/src/table/operations.js',
            'table/relation': rootPath + '/js/src/table/relation.js',
            'table/select': rootPath + '/js/src/table/select.js',
            'table/structure': rootPath + '/js/src/table/structure.js',
            'table/tracking': rootPath + '/js/src/table/tracking.js',
            'table/zoom_plot_jqplot': rootPath + '/js/src/table/zoom_plot_jqplot.js',
            'transformations/image_upload': rootPath + '/js/src/transformations/image_upload.js',
            'transformations/json': rootPath + '/js/src/transformations/json.js',
            'transformations/json_editor': rootPath + '/js/src/transformations/json_editor.js',
            'transformations/sql_editor': rootPath + '/js/src/transformations/sql_editor.js',
            'transformations/xml': rootPath + '/js/src/transformations/xml.js',
            'transformations/xml_editor': rootPath + '/js/src/transformations/xml_editor.js',
            'u2f': rootPath + '/js/src/u2f.js',
            'validator-messages': rootPath + '/js/src/validator-messages.js',
            'webauthn': rootPath + '/js/src/webauthn.js',
        },
        output: {
            filename: '[name].js',
            path: publicPath + '/js/dist',
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                name: 'shared',
                minSize: 1,
            },
        },
        externals: {
            jquery: 'jQuery',
            codemirror: 'CodeMirror',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets:  ['@babel/preset-env'],
                        },
                    },
                },
            ],
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: rootPath + '/node_modules/codemirror/addon/hint/sql-hint.js', to: publicPath + '/js/vendor/codemirror/addon/hint/sql-hint.js' },
                    { from: rootPath + '/node_modules/codemirror/addon/hint/show-hint.css', to: publicPath + '/js/vendor/codemirror/addon/hint/show-hint.css' },
                    { from: rootPath + '/node_modules/codemirror/addon/hint/show-hint.js', to: publicPath + '/js/vendor/codemirror/addon/hint/show-hint.js' },
                    { from: rootPath + '/node_modules/codemirror/addon/runmode/runmode.js', to: publicPath + '/js/vendor/codemirror/addon/runmode/runmode.js' },
                    { from: rootPath + '/node_modules/codemirror/addon/lint/lint.css', to: publicPath + '/js/vendor/codemirror/addon/lint/lint.css' },
                    { from: rootPath + '/node_modules/codemirror/addon/lint/lint.js', to: publicPath + '/js/vendor/codemirror/addon/lint/lint.js' },
                    { from: rootPath + '/node_modules/codemirror/lib/codemirror.js', to: publicPath + '/js/vendor/codemirror/lib/codemirror.js' },
                    { from: rootPath + '/node_modules/codemirror/lib/codemirror.css', to: publicPath + '/js/vendor/codemirror/lib/codemirror.css' },
                    { from: rootPath + '/node_modules/codemirror/mode/sql/sql.js', to: publicPath + '/js/vendor/codemirror/mode/sql/sql.js' },
                    { from: rootPath + '/node_modules/codemirror/mode/javascript/javascript.js', to: publicPath + '/js/vendor/codemirror/mode/javascript/javascript.js' },
                    { from: rootPath + '/node_modules/codemirror/mode/xml/xml.js', to: publicPath + '/js/vendor/codemirror/mode/xml/xml.js' },
                    { from: rootPath + '/node_modules/codemirror/LICENSE', to: publicPath + '/js/vendor/codemirror/LICENSE', toType: 'file' },
                    { from: rootPath + '/node_modules/jquery/dist/jquery.min.js', to: publicPath + '/js/vendor/jquery/jquery.min.js' },
                    { from: rootPath + '/node_modules/jquery/dist/jquery.min.map', to: publicPath + '/js/vendor/jquery/jquery.min.map' },
                    { from: rootPath + '/node_modules/jquery/LICENSE.txt', to: publicPath + '/js/vendor/jquery/MIT-LICENSE.txt' },
                    { from: rootPath + '/node_modules/jquery-migrate/dist/jquery-migrate.min.js', to: publicPath + '/js/vendor/jquery/jquery-migrate.min.js' },
                    { from: rootPath + '/node_modules/jquery-migrate/dist/jquery-migrate.min.map', to: publicPath + '/js/vendor/jquery/jquery-migrate.min.map' },
                    { from: rootPath + '/node_modules/jquery-ui-dist/jquery-ui.min.js', to: publicPath + '/js/vendor/jquery/jquery-ui.min.js' },
                    { from: rootPath + '/node_modules/jquery-validation/dist/jquery.validate.min.js', to: publicPath + '/js/vendor/jquery/jquery.validate.min.js' },
                    { from: rootPath + '/node_modules/jquery-validation/dist/additional-methods.js', to: publicPath + '/js/vendor/jquery/additional-methods.js' },
                    { from: rootPath + '/node_modules/js-cookie/dist/js.cookie.min.js', to: publicPath + '/js/vendor/js.cookie.min.js' },
                    { from: rootPath + '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', to: publicPath + '/js/vendor/bootstrap/bootstrap.bundle.min.js' },
                    { from: rootPath + '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map', to: publicPath + '/js/vendor/bootstrap/bootstrap.bundle.min.js.map' },
                    { from: rootPath + '/node_modules/@zxcvbn-ts/core/dist/zxcvbn-ts.js', to: publicPath + '/js/vendor/zxcvbn-ts.js' },
                    { from: rootPath + '/node_modules/@zxcvbn-ts/core/dist/zxcvbn-ts.js.map', to: publicPath + '/js/vendor/zxcvbn-ts.js.map' },
                    { from: rootPath + '/node_modules/tracekit/tracekit.js', to: publicPath + '/js/vendor/tracekit.js' },
                    { from: rootPath + '/node_modules/u2f-api-polyfill/u2f-api-polyfill.js', to: publicPath + '/js/vendor/u2f-api-polyfill.js' },
                    { from: rootPath + '/node_modules/jquery-uitablefilter/jquery.uitablefilter.js', to: publicPath + '/js/vendor/jquery/jquery.uitablefilter.js' },
                    { from: rootPath + '/node_modules/tablesorter/dist/js/jquery.tablesorter.js', to: publicPath + '/js/vendor/jquery/jquery.tablesorter.js' },
                    { from: rootPath + '/node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.js', to: publicPath + '/js/vendor/jquery/jquery-ui-timepicker-addon.js' },
                    { from: rootPath + '/node_modules/ol/ol.css', to: publicPath + '/js/vendor/openlayers/theme/ol.css' },
                    { from: rootPath + '/node_modules/locutus.sprintf/src/php/strings/sprintf.browser.js', to: publicPath + '/js/vendor/sprintf.js' },
                    { from: rootPath + '/node_modules/updated-jqplot/build/plugins/jqplot.pieRenderer.js', to: publicPath + '/js/vendor/jqplot/plugins/jqplot.pieRenderer.js' },
                    { from: rootPath + '/node_modules/updated-jqplot/build/plugins/jqplot.barRenderer.js', to: publicPath + '/js/vendor/jqplot/plugins/jqplot.barRenderer.js' },
                    { from: rootPath + '/node_modules/updated-jqplot/build/plugins/jqplot.pointLabels.js', to: publicPath + '/js/vendor/jqplot/plugins/jqplot.pointLabels.js' },
                    { from: rootPath + '/node_modules/updated-jqplot/build/plugins/jqplot.enhancedPieLegendRenderer.js', to: publicPath + '/js/vendor/jqplot/plugins/jqplot.enhancedPieLegendRenderer.js' },
                    { from: rootPath + '/node_modules/updated-jqplot/build/plugins/jqplot.dateAxisRenderer.js', to: publicPath + '/js/vendor/jqplot/plugins/jqplot.dateAxisRenderer.js' },
                    { from: rootPath + '/node_modules/updated-jqplot/build/plugins/jqplot.categoryAxisRenderer.js', to: publicPath + '/js/vendor/jqplot/plugins/jqplot.categoryAxisRenderer.js' },
                    { from: rootPath + '/node_modules/updated-jqplot/build/plugins/jqplot.canvasTextRenderer.js', to: publicPath + '/js/vendor/jqplot/plugins/jqplot.canvasTextRenderer.js' },
                    { from: rootPath + '/node_modules/updated-jqplot/build/plugins/jqplot.canvasAxisLabelRenderer.js', to: publicPath + '/js/vendor/jqplot/plugins/jqplot.canvasAxisLabelRenderer.js' },
                    { from: rootPath + '/node_modules/updated-jqplot/build/plugins/jqplot.cursor.js', to: publicPath + '/js/vendor/jqplot/plugins/jqplot.cursor.js' },
                    { from: rootPath + '/node_modules/updated-jqplot/build/plugins/jqplot.highlighter.js', to: publicPath + '/js/vendor/jqplot/plugins/jqplot.highlighter.js' },
                ],
            }),
            new WebpackConcatPlugin({
                bundles: [
                    {
                        dest: publicPath + '/js/vendor/jqplot/jquery.jqplot.js',
                        src: [
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.core.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.axisLabelRenderer.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.axisTickRenderer.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.canvasGridRenderer.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.divTitleRenderer.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.linePattern.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.lineRenderer.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.linearAxisRenderer.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.linearTickGenerator.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.markerRenderer.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.shadowRenderer.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.shapeRenderer.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.tableLegendRenderer.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.themeEngine.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.toImage.js',
                            rootPath + '/node_modules/updated-jqplot/build/jsdate.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.sprintf.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.effects.core.js',
                            rootPath + '/node_modules/updated-jqplot/build/jqplot.effects.blind.js',
                        ],
                    },
                ],
            }),
        ],
    },
    {
        name: 'OpenLayers',
        entry: rootPath + '/js/src/ol.mjs',
        devtool: 'source-map',
        mode: 'production',
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        },
        output: {
            path: publicPath + '/js/vendor/openlayers',
            filename: 'OpenLayers.js',
            library: 'ol',
            libraryTarget: 'umd',
            libraryExport: 'default',
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: 'OpenLayers (https://openlayers.org/)\nCopyright 2005-present, OpenLayers Contributors All rights reserved.\nLicensed under BSD 2-Clause License (https://github.com/openlayers/openlayers/blob/main/LICENSE.md)',
            }),
        ],
        optimization: {
            minimize: false,
        }
    },
    {
        name: 'CSS',
        mode: 'none',
        devtool: 'source-map',
        entry: {
            'themes/bootstrap/css/theme': publicPath + '/themes/bootstrap/scss/theme.scss',
            'themes/metro/css/blueeyes-theme': publicPath + '/themes/metro/scss/blueeyes-theme.scss',
            'themes/metro/css/mono-theme': publicPath + '/themes/metro/scss/mono-theme.scss',
            'themes/metro/css/redmond-theme': publicPath + '/themes/metro/scss/redmond-theme.scss',
            'themes/metro/css/teal-theme': publicPath + '/themes/metro/scss/teal-theme.scss',
            'themes/metro/css/theme': publicPath + '/themes/metro/scss/theme.scss',
            'themes/original/css/theme': publicPath + '/themes/original/scss/theme.scss',
            'themes/pmahomme/css/theme': publicPath + '/themes/pmahomme/scss/theme.scss',
            'setup/styles': publicPath + '/setup/scss/styles.scss',
        },
        output: {
            filename: 'build/css/[name].js',
            path: publicPath,
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [ autoprefixer() ],
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
            new RtlCssPlugin({
                filename: '[name].rtl.css',
            }),
        ],
    },
];

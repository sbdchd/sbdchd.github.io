/* globals module require */

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        pug: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    'index.html': 'src/index.pug',
                    '404.html': 'src/404.pug'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    'sourcemap': 'none'
                },
                files: {
                    'dist/main.css': 'src/main.scss'
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['static/*'],
                    dest: 'dist/'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    keepalive: true
                }
            }
        },
        watch: {
            pug: {
                files: ['src/index.pug', 'src/404.pug'],
                tasks: ['pug']
            },
            sass: {
                files: 'src/main.scss',
                tasks: ['sass']
            },
            options: {
                spawn: false
            }
        },
        clean: ['dist/',
                'index.html',
                '404.html']
    });

    grunt.registerTask('default', ['pug', 'sass', 'copy']);
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
};

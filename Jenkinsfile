pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Pre-build') {
            steps {
                dir('node-jenkins') {
                    sh 'npm install'
                }
            }
        }
        stage('Pre-test') {
            steps {
                dir('node-jenkins') {
                    sh 'npm run test'
                }
            }
        }
        stage('Build') {
            steps {
                dir('node-jenkins') {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('node-jenkins') {
                    sh 'npm run start'
                }
            }
        }
    }
}
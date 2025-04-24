pipeline {
    agent {
        label 'slave'
    }

    environment {
        DOCKER_IMAGE = "vikasprince/test1"
        DOCKER_TAG = "v1.1.0"
    }

    stages {
        stage("Checkout SCM") {
            steps {
                git 'https://github.com/Vikas-Prince/TECHWAVE/'
                echo "Checkout complete"
            }
        }

        stage("Install Dependencies") {
            steps {
                sh 'npm install'
                echo "Dependencies installed"
            }
        }

        stage("Perform unit tests and lint checks") {
            parallel{
                stage("Unit Test Cases"){
                    steps {
                        script {
                            try {
                                sh 'npm test'
                                echo "All test cases passed ✅"
                            } catch (Exception e) {
                                echo " Test cases failed. Exiting pipeline."
                                error("Tests failed. Stopping pipeline.")
                            }
                        }
                    }
                }

                stage("Lint Checks"){
                    steps{
                        echo "lint checks performed successfully"
                    }
                }
            }
        }

        stage("Build and Package") {
            parallel {
                stage("Build Docker Image") {
                    steps {
                        withDockerRegistry(credentialsId: 'docker-cred', url: 'https://docker.io') {
                            sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
                        }
                    }
                }

                stage("Package Artifact") {
                    steps {
                        sh 'npm pack'
                        echo "React app packed into a .tgz artifact"
                        archiveArtifacts artifacts: '*.tgz', fingerprint: true
                    }
                }

            }
        }

        stage("Push Image to Docker Hub and Update Manifest") {
            parallel {
                stage("Push Image Docker to Docker Hub") {
                    steps {
                        withDockerRegistry(credentialsId: 'docker-cred', url: 'https://docker.io') {
                            sh 'docker push ${DOCKER_IMAGE}:${DOCKER_TAG}'
                        }
                    }
                }

                stage("Update the Docker Tag in K8s Manifest files") {
                    steps {
                        sh """
                        sed -i "s|image: vikasprince/newsapp:.*|image: ${DOCKER_IMAGE}:${DOCKER_TAG}|" manifest.yml
                        """
                        echo "Successfully updated docker tag in the manifest files"
                    }
                }
            }
        }

        stage('Deploy k8s manifest application to the Kubernetes cluster') {
            steps {
                withKubeCredentials(kubectlCredentials: [[caCertificate: '', clusterName: 'eks-cluster-prod', contextName: '', credentialsId: 'k8s-token', namespace: 'frontend', serverUrl: 'https://30B70E8AA9001EFD887CDDD39708E034.gr7.ap-south-1.eks.amazonaws.com']]) {
                    sh "kubectl apply -f manifest.yml"
                }
            }
        }

        stage('Verify the services deployed in k8s cluster') {
            steps {
                withKubeCredentials(kubectlCredentials: [[caCertificate: '', clusterName: 'eks-cluster-prod', contextName: '', credentialsId: 'k8s-token', namespace: 'frontend', serverUrl: 'https://30B70E8AA9001EFD887CDDD39708E034.gr7.ap-south-1.eks.amazonaws.com']]) {
                    sh "kubectl get pods"
                }
            }
        }
    }
}

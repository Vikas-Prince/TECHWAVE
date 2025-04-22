pipeline{
    agent {
        label 'slave'
    }

    environment {
        DOCKER_IMAGE = "vikasprince/newsapp"
        DOCKER_TAG = "v1.1.0"
    }

    stages{
        stage("Checkout SCM"){
            steps{
                git branch: 'main', url: 'https://github.com/Vikas-Prince/JavaApplicationDeployment.git'
                echo "Checkout complete"
            }
        }

        stage("Install Dependencies"){
            steps{
                sh 'npm install'
                echo "Dependencies installed"
            }
        }

        stage("Test the Source Code"){
            steps{
                sh 'npm test'
                echo "All test cases are passed"
            }
        }

        stage("Build Docker Image"){
            steps{
                withDockerRegistry(credentialsID: 'docker-cred', url: 'https://docker.io'){
                    sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
                }
            }
        }

        stage("Push Image Docker to Docker Hub"){
            steps{
                withDockerRegistry(credentialsID: 'docker-cred', url: 'https://docker.io'){
                    sh 'docker push ${DOCKER_IMAGE}:${DOCKER_TAG}'
                }
            }
        }

        stage('Deploy k8s manifest application to the Kubernetes cluster'){
            steps {
                withKubeCredentials(kubectlCredentials: [[caCertificate: '', clusterName: 'EKS-DevOps', contextName: '', credentialsId: 'k8s-token', namespace: 'frontend', serverUrl: 'https://CE5FEB5F965E1A06424B71277BDD85E3.gr7.ap-south-1.eks.amazonaws.com']]) {
                    sh "kubectl apply -f k8sdeployment-service.yml"
                }
            }
        }

        stage('Verify the services deployed in k8s cluster'){
            steps{
                withKubeCredentials(kubectlCredentials: [[caCertificate: '', clusterName: 'EKS-DevOps', contextName: '', credentialsId: 'k8s-token', namespace: 'frontend', serverUrl: 'https://CE5FEB5F965E1A06424B71277BDD85E3.gr7.ap-south-1.eks.amazonaws.com']]) {
                    sh "kubectl get pods"
                }
            }
        }
    }
}
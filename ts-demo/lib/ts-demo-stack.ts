import * as blueprints from '@aws-quickstart/eks-blueprints';
import { KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';

export class TsDemoStack{
    build(scope: Construct){
        const account = process.env.CDK_DEFAULT_ACCOUNT!;
        const region = process.env.CDK_DEFAULT_REGION!;

        const addOns: Array<blueprints.ClusterAddOn> = [
            new blueprints.addons.KubeProxyAddOn()
        ];
        const teams: Array<blueprints.Team> = [
            new blueprints.ApplicationTeam({name: "team1"})
        ];

        blueprints.EksBlueprint.builder()
            .account(account)
            .region(region)
            .clusterProvider(new blueprints.MngClusterProvider({name: "test-cluster-provider", version: KubernetesVersion.of("1.27")}))
            .addOns(...addOns)
            .teams(...teams)
            .useDefaultSecretEncryption(true) // set to false to turn secret encryption off (non-production/demo cases)
            .build(scope, 'test-from-ts');
    }
}

#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TsDemoStack } from '../lib/ts-demo-stack';

const app = new cdk.App();
new TsDemoStack().build(app);

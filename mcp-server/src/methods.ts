// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.users.create',
    fullyQualifiedName: 'users.create',
    httpMethod: 'post',
    httpPath: '/users',
  },
  {
    clientCallName: 'client.users.retrieve',
    fullyQualifiedName: 'users.retrieve',
    httpMethod: 'get',
    httpPath: '/users/{userId}',
  },
  {
    clientCallName: 'client.users.update',
    fullyQualifiedName: 'users.update',
    httpMethod: 'patch',
    httpPath: '/users/{userId}',
  },
  {
    clientCallName: 'client.users.list',
    fullyQualifiedName: 'users.list',
    httpMethod: 'get',
    httpPath: '/users',
  },
  {
    clientCallName: 'client.users.delete',
    fullyQualifiedName: 'users.delete',
    httpMethod: 'delete',
    httpPath: '/users/{userId}',
  },
  {
    clientCallName: 'client.users.bulk.getJobStatus',
    fullyQualifiedName: 'users.bulk.getJobStatus',
    httpMethod: 'get',
    httpPath: '/users/bulk/jobs/{jobId}',
  },
  {
    clientCallName: 'client.users.bulk.upload',
    fullyQualifiedName: 'users.bulk.upload',
    httpMethod: 'post',
    httpPath: '/users/bulk/csv',
  },
  {
    clientCallName: 'client.tokens.create',
    fullyQualifiedName: 'tokens.create',
    httpMethod: 'post',
    httpPath: '/tokens',
  },
  {
    clientCallName: 'client.tokens.retrieve',
    fullyQualifiedName: 'tokens.retrieve',
    httpMethod: 'get',
    httpPath: '/tokens/{tokenId}',
  },
  {
    clientCallName: 'client.tokens.list',
    fullyQualifiedName: 'tokens.list',
    httpMethod: 'get',
    httpPath: '/tokens',
  },
  {
    clientCallName: 'client.tokens.delete',
    fullyQualifiedName: 'tokens.delete',
    httpMethod: 'delete',
    httpPath: '/tokens/{tokenId}',
  },
  {
    clientCallName: 'client.config.retrieve',
    fullyQualifiedName: 'config.retrieve',
    httpMethod: 'get',
    httpPath: '/config',
  },
  {
    clientCallName: 'client.config.update',
    fullyQualifiedName: 'config.update',
    httpMethod: 'patch',
    httpPath: '/config',
  },
  {
    clientCallName: 'client.webhooks.sendTest',
    fullyQualifiedName: 'webhooks.sendTest',
    httpMethod: 'post',
    httpPath: '/webhooks/test',
  },
  {
    clientCallName: 'client.transactions.retrieve',
    fullyQualifiedName: 'transactions.retrieve',
    httpMethod: 'get',
    httpPath: '/transactions/{transactionId}',
  },
  {
    clientCallName: 'client.transactions.list',
    fullyQualifiedName: 'transactions.list',
    httpMethod: 'get',
    httpPath: '/transactions',
  },
  {
    clientCallName: 'client.transactions.approve',
    fullyQualifiedName: 'transactions.approve',
    httpMethod: 'post',
    httpPath: '/transactions/{transactionId}/approve',
  },
  {
    clientCallName: 'client.transactions.reject',
    fullyQualifiedName: 'transactions.reject',
    httpMethod: 'post',
    httpPath: '/transactions/{transactionId}/reject',
  },
  {
    clientCallName: 'client.receiver.lookup',
    fullyQualifiedName: 'receiver.lookup',
    httpMethod: 'get',
    httpPath: '/receiver/{receiverUmaAddress}',
  },
  {
    clientCallName: 'client.quotes.create',
    fullyQualifiedName: 'quotes.create',
    httpMethod: 'post',
    httpPath: '/quotes',
  },
  {
    clientCallName: 'client.quotes.retrieve',
    fullyQualifiedName: 'quotes.retrieve',
    httpMethod: 'get',
    httpPath: '/quotes/{quoteId}',
  },
  {
    clientCallName: 'client.quotes.retry',
    fullyQualifiedName: 'quotes.retry',
    httpMethod: 'post',
    httpPath: '/quotes/{quoteId}/retry',
  },
  {
    clientCallName: 'client.invitations.create',
    fullyQualifiedName: 'invitations.create',
    httpMethod: 'post',
    httpPath: '/invitations',
  },
  {
    clientCallName: 'client.invitations.retrieve',
    fullyQualifiedName: 'invitations.retrieve',
    httpMethod: 'get',
    httpPath: '/invitations/{invitationCode}',
  },
  {
    clientCallName: 'client.invitations.cancel',
    fullyQualifiedName: 'invitations.cancel',
    httpMethod: 'post',
    httpPath: '/invitations/{invitationCode}/cancel',
  },
  {
    clientCallName: 'client.invitations.claim',
    fullyQualifiedName: 'invitations.claim',
    httpMethod: 'post',
    httpPath: '/invitations/{invitationCode}/claim',
  },
  {
    clientCallName: 'client.sandbox.receivePayment',
    fullyQualifiedName: 'sandbox.receivePayment',
    httpMethod: 'post',
    httpPath: '/sandbox/receive',
  },
  {
    clientCallName: 'client.sandbox.sendFunds',
    fullyQualifiedName: 'sandbox.sendFunds',
    httpMethod: 'post',
    httpPath: '/sandbox/send',
  },
  {
    clientCallName: 'client.umaProviders.list',
    fullyQualifiedName: 'umaProviders.list',
    httpMethod: 'get',
    httpPath: '/uma-providers',
  },
  {
    clientCallName: 'client.fbo.confirmPayment',
    fullyQualifiedName: 'fbo.confirmPayment',
    httpMethod: 'post',
    httpPath: '/fbo/confirm/{quoteId}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}

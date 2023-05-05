const { ClientSecretCredential } = require("@azure/identity");
const { ResourceManagementClient } = require("@azure/arm-resources");

  const credential = new ClientSecretCredential(
    process.env.AZURE_TENANT_ID, // The tenant ID in Azure Active Directory
    process.env.AZURE_CLIENT_ID, // The app registration client Id in the AAD tenant
    process.env.AZURE_CLIENT_SECRET // The app registration secret for the registered application
  );
  const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID;
  const parameter = {
    location: "norwayeast",
    tags: {
        tag1: "nodejs"
    },
    resourcegroupname: "nodejs2-rg"
  };

  const resourceGroupName = "nodejs2-rg"

  const client = new ResourceManagementClient(credential, subscriptionId);
  const response = client.resourceGroups.createOrUpdate(resourceGroupName,{location:"westeurope"}).then(console.log)
  console.log(response)


  
const { ResourceManagementClient } = require("@azure/arm-resources");

// Azure authentication library to access Azure Key Vault
const { DefaultAzureCredential } = require("@azure/identity");

// Azure SDK clients accept the credential as a parameter
const credential = new DefaultAzureCredential();

const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID;

// Create a resource group
function createOrUpdateResourceGroup(resourceGroupName) {
  const client = new ResourceManagementClient(credential, subscriptionId);
const response = client.resourceGroups
  .createOrUpdate(resourceGroupName, { location: "westeurope" })
  .then(console.log);
console.log(response);
}

createOrUpdateResourceGroup("myResourceGroup");

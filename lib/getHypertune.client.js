export default async function getHypertune() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        showNewSection: true, // or false
      });
    }, 500); // simulate async evaluation
  });
}

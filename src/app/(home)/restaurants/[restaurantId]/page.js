const RestaurantPage = async ({ params }) => {
  const { restaurantId } = await params;
  return <div style={{ color: "white" }}>Restaurant page - {restaurantId}</div>;
};

export default RestaurantPage;

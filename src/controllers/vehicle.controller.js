import { Vehicle } from "../models/Vehicle";

export async function getVehicles(req, res) {
  try {
    const vehicles = await Vehicle.findAll({
      atributes: ["id", "mark", "model", "registration", "owner_id"],
    });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getOwnerVehicles(req, res) {
  const { owner_id } = req.params;
  try {
    const vehicle = await Vehicle.findAll({
      where: {
        owner_id: owner_id,
      },
    });
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createVehicle(req, res) {
  const { mark, model, registration, owner_id } = req.body;
  try {
    let newVehicle = await Vehicle.create(
      {
        mark,
        model,
        registration,
        owner_id,
      },
      {
        fields: ["mark", "model", "registration", "owner_id"],
      }
    );
    return res.json(newVehicle);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const { mark, model, registration, owner_id } = req.body;

    const vehicle = await Vehicle.findByPk(id);
    if (mark) vehicle.mark = mark;
    if (model) vehicle.model = model;
    if (registration) vehicle.registration = registration;
    if (owner_id) vehicle.owner_id = owner_id;
    await vehicle.save();
    res.json(vehicle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteVehicle(req, res) {
  const { id } = req.params;
  try {
    await Vehicle.destroy({
      where: {
        id: id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

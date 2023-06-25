import Transction from "../model/Transction";

import moment from 'moment'

export const getAllTransection = async (req, res) => {
  try {
    const { frequency, selecteDate } = req.body;
    const transections = await Transction.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selecteDate[0],
              $lte: selecteDate[1],
            },
          }),
      userid: req.body.userid,
      // ...(type !== "all" && { type }),
    });




    res.status(200).json(transections);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const deleteTransection = async (req, res) => {
  try {
    await Transction.findOneAndDelete({ _id: req.body.transacationId });
    res.status(200).send("Transaction Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const editTransection = async (req, res) => {
  try {
    await Transction.findOneAndUpdate(
      { _id: req.params.id },
      req.body.payload
    );
    res.status(200).send("Edit SUccessfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const addTransection = async (req, res) => {
  try {
    const newTransection = new Transction(req.body);
    await newTransection.save();
    res.status(201).send("Transection Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
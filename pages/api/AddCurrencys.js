import AddCurrency from "../../helper/model/AddCurrency";
import initDB from "../../helper/initDB";

initDB();

export default async (req, res) => {
  if (req.method === "GET") {
    getCurrency(req, res);
  }
  if (req.method === "POST") {
    postCurrency(req, res);
  }
  if (req.method === "DELETE") {
    deleteCurrency(req, res);
  }
  if (req.method === "PUT") {
    updateCurrency(req, res);
  }
};

const getCurrency = async (req, res) => {
  const mainData = await AddCurrency.find();
  res.status(200).json(mainData);
};

const postCurrency = async (req, res) => {
  const { TokenName, Symbol, WalletAddress, QRCode ,Conversion} = req.body;

  if (!TokenName || !Symbol || !WalletAddress || !QRCode ||!Conversion) {
    res.status(222).json({ error: "Please Provide All Credentials" });
  }

  const newCurrencyData = await new AddCurrency({
    TokenName,
    Symbol,
    WalletAddress,
    QRCode,
    Conversion
  }).save();
  res.status(200).json(newCurrencyData);
};

const deleteCurrency = async (req, res) => {
  const { id } = req.body;

  const mainData = await AddCurrency.findByIdAndDelete({ _id: id });
  res.status(200).json({ success: "Currency Deleted Successfully" });
};

const updateCurrency = async (req, res) => {
  const { TokenName, Symbol, WalletAddress, QRCode, id } = req.body;

  const updatingData = await AddCurrency.findByIdAndUpdate(
    { _id: id },
    { TokenName, Symbol, WalletAddress, QRCode }
  );

  res.status(200).json({ updated: "Successfully Updated" });
};

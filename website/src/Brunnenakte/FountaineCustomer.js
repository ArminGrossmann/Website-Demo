import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FountaineCustomer(props) {
  return (
    <div className="border-8 border-slate-800 rounded bg-slate-800 ">
      <p className="text-2xl text-gray-300 mt-4 flex left bg-slate-800 m-4">
        Auftraggeber:
      </p>
      <table className="bg-slate-800 mt-2 m-4">
        <tbody>
          <tr>
            <td className="text-gray-300 text-left">Name:</td>
            <td className="text-gray-300 text-left">
              <div>Armin Großmann</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">Straße:</td>
            <td className="text-gray-300 text-justify">
              <div>Vegesacker Straße 87</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">Ort:</td>
            <td className="text-gray-300 text-justify">
              <div>28259 Bremen</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">Ansprechpartner:</td>
            <td className="text-gray-300 text-justify">
              <div>Ich</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">Name:</td>
            <td className="text-gray-300 text-justify">
              <div>Projekt Ehre</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left">Telefon:</td>
            <td className="text-gray-300 text-justify">
              <div>0648548406</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left w-1/3">Mobil:</td>
            <td className="text-gray-300 text-justify">
              <div>640646440</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 text-left w-1/3">E-Mail:</td>
            <td className="text-gray-300 text-justify">
              <div>Armin@mail.com</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

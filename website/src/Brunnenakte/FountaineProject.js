import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FountaineProject(props) {
  return (
    <div className="border-8 border-slate-800 rounded bg-slate-800 ">
      <p className="text-2xl text-gray-300 mt-4  m-4">Projekt:</p>
      <table className=" mt-2 m-4">
        <tbody>
          <tr>
            <td className="text-gray-300 w-1/3 text-left">Nummer:</td>
            <td className="text-gray-300 text-justify">
              <div>6363</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/3 text-left">Name:</td>
            <td className="text-gray-300 text-justify  ">
              <div>Armin</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/3 text-left">Straße:</td>
            <td className="text-gray-300 text-justify">
              <div>Baumstraße</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/3 text-left">Ort:</td>
            <td className="text-gray-300 text-justify">
              <div>Bremne</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/3 text-left">Gemarkung:</td>
            <td className="text-gray-300 text-justify">
              <div>Kein Plan</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/3 text-left">Flur:</td>
            <td className="text-gray-300 text-justify">
              <div>-3</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/3 text-left">Flurstück:</td>
            <td className="text-gray-300 text-justify">
              <div>-2</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/3 text-left">Ansprechpartner:</td>
            <td className="text-gray-300 text-justify">
              <div>Du selber</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/3 text-left">Name:</td>
            <td className="text-gray-300 text-justify">
              <div>Du selber</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/3 text-left">Telefon:</td>
            <td className="text-gray-300 text-justify">
              <div>5</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/2 text-left">Mobil:</td>
            <td className="text-gray-300 text-justify">
              <div>@</div>
            </td>
          </tr>
          <tr>
            <td className="text-gray-300 w-1/2 text-left ">E-Mail:</td>
            <td className="text-gray-300 text-justify">
              <div>Brieftaube ist da</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

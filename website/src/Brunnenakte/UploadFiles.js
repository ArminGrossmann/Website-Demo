import React, { Component } from "react";

/**
 * Tutorial für Dateiupload: https://www.bezkoder.com/react-hooks-file-upload/
 */

export default class UploadFiles extends Component {

    render() {

        return (
            <div className="border-8 border-slate-800 rounded bg-slate-800">
                <div>
                    <div className="mt-5 flex justify-center ml-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white " for="file_input">
                            <input className="hover:bg-slate-600  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400  dark:bg-gray-700 dark:border-gray-600 " id="file_input" type="file"/>
                        </label>

                        <button className="hover:bg-slate-400 flex mb-2 mx-2   bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-4 py-1 text-xs"
                        >
                            Hochladen
                        </button>
                    </div>
                </div>
                <br/>

                <div>
                    <p className="text-2xl text-gray-300 ml-5">Enthaltene Dokumente:</p>
                    <div className="flex justify-center overflow-auto">
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}
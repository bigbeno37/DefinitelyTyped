// Type definitions for electron-dl 1.12
// Project: https://github.com/sindresorhus/electron-dl#readme
// Definitions by: bigbeno37 <https://github.com/bigbeno37>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {BrowserWindow, DownloadItem} from 'electron';

interface Options {
    /**
     * Show a Save As... dialog instead of downloading immediately. Note: Only use this option when
     * strictly necessary. Downloading directly without a prompt is a much better user experience.
     *
     * @default false
     */
    saveAs?: boolean,

    /**
     * Directory to save the file in.
     *
     * @default The User's downloads directory.
     */
    directory?: string,

    /**
     * Name of the saved file. This option only makes sense for electronDl.download().
     *
     * @default The filename of the downloaded item (Specifically DownloadItem.getFilename()).
     */
    filename?: string,

    /**
     * Title of the error dialog. Can be customised for localisation.
     *
     * @default 'Download Error'
     */
    errorTitle?: string,

    /**
     * Message of the error dialog. {filename} is replaced with the name of the actual file. Can be
     * customised for localisation.
     *
     * @default 'The download of {filename} was interrupted'
     */
    errorMessage?: string,

    /**
     * Optional callback that receives the download item. You can use this for advanced handling such
     * as cancelling the item eg. item.cancel().
     * @param item - The DownloadItem being downloaded.
     */
    onStarted?: (item: DownloadItem) => void,

    /**
     * Optional callback that receives a number between 0 and 1 representing the progress of the current download
     * eg. 0.5 represents a file 50% completed.
     * @param progress - A number between 0 and 1 representing the progress of the current download.
     */
    onProgress?: (progress: number) => void,

    /**
     * Optional callback that receives the DownloadItem for which the download has been cancelled.
     * @param item - The DownloadItem that was cancelled.
     */
    onCancel?: (item: DownloadItem) => void,

    /**
     * Reveal the downloaded file in the system file manager, and if possible, select the file.
     *
     * @default false
     */
    openFolderWhenDone?: boolean,

    /**
     * Shows the file count badge on macOS/Linux dock icons when download is in progress.
     *
     * @default true
     */
    showBadge: boolean
}

/**
 * Used to make ElectronDl available to all windows.
 * @param options
 * @constructor
 */
export default function ElectronDl(options?: Options): void;
/**
 * Downloads a file from the given url in a given window using any given options.
 * @param win - The window to download the file from.
 * @param url - Where to download the file from.
 * @param options
 * @returns A Promise containing a DownloadItem which will resolve once the download completes.
 */
export function download(window: BrowserWindow, url: string, options?: Options): Promise<DownloadItem>;

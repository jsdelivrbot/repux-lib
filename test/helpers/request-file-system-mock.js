export const WRITE_STATUS = {
    PENDING: 'WRITE_PENDING',
    FINISHED: 'WRITE_FINISHED'
};

export const FILE_URL = 'TEST_FILE_URL';

export default function mockRequestFileSystem() {
    window.requestFileSystem = (storageType, size, onSuccess) => onSuccess({
        root: {
            /* eslint standard/no-callback-literal: 0 */
            getFile: (fileName, options, callback) => callback({
                toURL: () => FILE_URL,
                createWriter: cbk => cbk({
                    truncate: () => {
                    },
                    write: function () {
                        this.status = WRITE_STATUS.PENDING;
                        setTimeout(() => {
                            this.status = WRITE_STATUS.FINISHED;
                            this.onwriteend();
                        }, 10);
                    }
                })
            })

        }
    });
}

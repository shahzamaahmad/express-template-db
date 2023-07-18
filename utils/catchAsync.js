module.exports = (fn) => {
    return (req, res, next) => {
        // e.g, createTour needs to be a function to be called upon router, hence this will return a new function that will be assigned to createTour which will be called as express calls it.

        // fn(req, res, next).catch((err) => next(err));
        fn(req, res, next).catch(next);
    };
};

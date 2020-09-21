"use strict";
class Vector2 {
    /**
     * @constructor
     * @param {number} x - x value
     * @param {number} y - y value
     */
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    /**
     * Vector addition
     * @method add
     * @param {Vector2} v vector value
     */
    add(v) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
        return new Vector2(this.x, this.y);
    }
    /**
     * Vector addition
     * @method add static method
     * @param {Vector2} v vector value
     * @param {Vector2} w vector value
     */
    static add(v, w) {
        return new Vector2(v.x + w.x, v.y + w.y);
    }
    /**
     * Vector  subtraction
     * @method sub
     * @param {Vector2} v vector value
     */
    sub(v) {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
        return new Vector2(this.x, this.y);
    }
    /**
   * Vector  subtraction
   * @method sub static method
   * @param {Vector2} v vector value
   * @param {Vector2} w vector value
   */
    static sub(v, w) {
        return new Vector2(v.x - w.x, v.y - w.y);
    }
    /**
     * Scalar-vector multiplication
     * @method multi
     * @param {number} m scalar value
     */
    multi(m) {
        this.x = this.x * m;
        this.y = this.y * m;
        return new Vector2(this.x, this.y);
    }
    /**
   * Scalar-vector multiplication
   * @method multi static method
   * @param {Vector2} v vector value
   * @param {number} m scalar value
   */
    static multi(v, m) {
        return new Vector2(v.x * m, v.y * m);
    }
    /**
     * Scalar-vector  division
     * @method div
     * @param {number} d scalar value
     */
    div(d) {
        this.x = this.x / d;
        this.y = this.y / d;
        return new Vector2(this.x, this.y);
    }
    /**
    * Scalar-vector  division
    * @method div static method
    * @param {Vector2} v vector value
    * @param {number} d scalar value
    */
    static div(v, d) {
        return new Vector2(v.x / d, v.y / d);
    }
    /**
     * dot product
     * @method dot
     * @param {Vector2} v
     */
    dot(v) {
        this.x = this.x * v.x;
        this.y = this.y * v.y;
        return this.x + this.y;
    }
    /**
     * dot product
     * @method dot static method
     * @param {Vector2} v
     * @param {Vector2} w
     */
    static dot(v, w) {
        return (v.x * w.x) + (v.y * w.y);
    }
    /*
    public angle(v : Vector2, w : Vector2): number{
        let vv = v.normalize();
    }*/
    /**
     * Euclidean distance
     * @method dist
     * @param {number} v
     */
    /*
    public dist(v : Vector2): number{
 
    }*/
    /**
     * @method mag
     * Vector Magnitude
     * vector length
     */
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * @method normalize
     * Vector Normalize
     */
    normalize() {
        this.x = this.x / this.mag();
        this.y = this.y / this.mag();
        return new Vector2(this.x, this.y);
    }
}

//export {Vector2};

class Vector3 extends Vector2 {
    /**
     * @constructor
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    constructor(x, y, z) {
        super(x, y);
        this.z = 0;
        this.z = z;
    }
}
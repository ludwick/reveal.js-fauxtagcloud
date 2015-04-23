# reveal.js-fauxtagcloud
A fake tag cloud for reveal.js allowing simple approximate relative sizes for tags in the cloud.

## Usage

Install plugin/fauxtagcloud/fauxtagcloud into your plugin directory in your presentation.

Reference in dependencies for Reveal:

```
   { src: 'plugin/fauxtagcloud/fauxtagcloud.js' },
```

Then create a tag cloud slide!

```
  <section data-state="tagcloud" data-tagcloud='mytagsobject'>
    <script>
      window.mytagsobject = {
        "size": "large",
        "tags": {
          "Foo": 1,
          "Bar": 1,
          "Quux": 2,
          "Baz": 5
        }
      }
    </script>
  </section>
```

Smaller numbered tags will be larger fonts. If multiple tags have the same rank, they will get approximately the same size with a jitter.
